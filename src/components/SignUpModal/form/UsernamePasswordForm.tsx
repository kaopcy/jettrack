const UsernamePasswordForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <input
        className="w-full rounded-2xl bg-[#1b2628] px-4 py-4 placeholder:text-zinc-500 focus:outline"
        required
        placeholder="Username or Email"
      />
      <input
        className="w-full rounded-2xl bg-[#1b2628] px-4 py-4 placeholder:text-zinc-500 focus:outline"
        required
        type="password"
        placeholder="Password"
      />

      <button className="mt-10 rounded-full bg-[#452114] p-4 font-semibold disabled:text-[#828d9060]" disabled>
        Log In
      </button>
    </div>
  );
};

export default UsernamePasswordForm;
