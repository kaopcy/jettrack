"use client";

import "./styles/editor.css";

import EditorJS from "@editorjs/editorjs";
import { useCallback, useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import Icon from "@/libs/icon";

const Editor = () => {
  const editorRef = useRef<EditorJS>();

  const [hasEditorInit, setHasEditorInit] = useState(false);

  const initEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const Table = (await import("@editorjs/table")).default;
    const List = (await import("@editorjs/list")).default;
    const Code = (await import("@editorjs/code")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;
    const FontSizeTool = (await import("./inlineTools/fontSizeTool")).default;

    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          editorRef.current = editor;
          setHasEditorInit(true);
        },
        placeholder: "Start write your article...",
        inlineToolbar: true,
        tools: {
          header: Header,
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          fontSize: FontSizeTool,
          table: Table,
          embed: Embed,
        },
      });
    }
  }, []);

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initEditor();

      return () => {
        editorRef.current?.destroy();
        editorRef.current = undefined;
      };
    }
  }, [isMounted, initEditor]);

  return (
    <div className="mt-10 grid w-full gap-10 text-[#e3e3e3]">
      <div className=" mx-auto  w-[800px]">
        <TextareaAutosize
          autoFocus
          id="title"
          placeholder="Title..."
          className="mb-0 h-[72px] w-full resize-none appearance-none overflow-hidden bg-transparent py-3 text-5xl font-medium focus:outline-none"
        />
        {!hasEditorInit && <Icon icon="material-symbols:progress-activity" className="mx-auto mt-10 animate-spin" />}
        <div id="editor" className="font-normal " />
      </div>
    </div>
  );
};

export default Editor;
