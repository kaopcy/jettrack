// import { renderToStaticMarkup } from "react-dom/server";
import { API } from "@editorjs/editorjs";
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode, useState } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";

import Icon from "@/libs/icon";

class FontSizeTool {
  static title = "Font Size";

  range: Range | null;
  api: API;

  static get isInline() {
    return true;
  }

  static get sanitize() {
    return {
      font: {
        size: true,
        face: true,
      },
    };
  }

  constructor({ api }: { api: API }) {
    this.api = api;
  }

  render() {
    const onClick = (value: number) => {
      const nodeee = this.createReactNode(<span style={{ fontSize: value }}></span>);

      const span = document.createElement("span");
      span.style.fontSize = "40px";

      if (this.range) {
        console.log(getTextNodesInRange(this.range));
      }
      this.range?.surroundContents(span);

      console.log(this.range);
    };

    function getTextNodesInRange(range: Range) {
      let textNodes: Node[] = [];
      let node = range.startContainer;
      const endNode = range.endContainer;

      while (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          textNodes.push(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const children = node.childNodes;
          for (let i = 0; i < children.length; i++) {
            // const a = children[i]?.ownerDocument?.createRange()?.selectNodeContents(children[i]);
            const a = getRangeFromNode(children[i]);
            textNodes = textNodes.concat(getTextNodesInRange(a));
          }
        }

        if (node === endNode) {
          break;
        }
        if (node.nextSibling) {
          node = node.nextSibling;
        }
      }

      return textNodes;
    }

    function getRangeFromNode(node) {
      const range = document.createRange();
      range.selectNodeContents(node);
      return range;
    }

    const node = this.createReactNode(<TestFC onClick={onClick} />);
    return node;
  }

  createReactNode(fc: ReactNode): HTMLElement {
    const div = document.createElement("div");
    const root = createRoot(div);

    flushSync(() => {
      root.render(fc);
    });
    return div;
  }

  surround(range: Range) {
    this.range = range;
  }

  // getComputedFontStyle(node: Node) {
  //   return window.getComputedStyle(node, null).getPropertyValue("font-size");
  // }

  checkState(selection: Selection) {
    console.log("selection: ");
    console.log(selection);

    // const isActive = document.queryCommandState("fontSize");
    // let anchoredElementFontSize = this.getComputedFontStyle(selection.anchorNode);
    // const focusedElementFontSize = this.getComputedFontStyle(selection.focusNode);

    // if (anchoredElementFontSize === focusedElementFontSize) {
    //   anchoredElementFontSize = anchoredElementFontSize.slice(0, anchoredElementFontSize.indexOf("p"));
    //   const elementContainsDecimalValue = anchoredElementFontSize.indexOf(".");
    //   if (elementContainsDecimalValue !== -1) {
    //     anchoredElementFontSize = anchoredElementFontSize.slice(0, anchoredElementFontSize.indexOf("."));
    //   }
    //   this.replaceFontSizeInWrapper(anchoredElementFontSize);
    // } else {
    //   const emptyWrapper = this.emptyString;
    //   this.replaceFontSizeInWrapper(emptyWrapper);
    // }
    // return isActive;
  }

  // replaceFontSizeInWrapper(size) {
  //   const displaySelectedFontSize = document.getElementById(this.fontSizeDropDown);
  //   displaySelectedFontSize.innerHTML = size;
  // }
}

const fontSizes = [
  { label: "12 px", value: 12 },
  { label: "14 px", value: 14 },
  { label: "16 px", value: 16 },
  { label: "18 px", value: 18 },
  { label: "20 px", value: 20 },
];

const TestFC: FC<{ onClick: (value: number) => void }> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onButtonClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div
      onClick={onButtonClick}
      className="relative my-auto flex h-full items-center justify-center  self-center px-2 font-google text-sm text-text-3  hover:bg-accent hover:text-white"
    >
      <span>14</span>
      <motion.div animate={{ rotate: isOpen ? 0 : 180 }}>
        <Icon icon="material-symbols:keyboard-arrow-up-rounded" className="h-4 w-4" />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 top-full mt-2 flex flex-col items-center rounded-md bg-white p-1 text-text-4"
          >
            {fontSizes.map((font) => (
              <span onClick={() => onClick(font.value)} key={font.value} className="whitespace-nowrap py-1 pl-0.5 pr-1">
                {font.label}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FontSizeTool;
