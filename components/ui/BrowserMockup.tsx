type BrowserMockupProps = {
  children: React.ReactNode;
};

export default function BrowserMockup({
  children,
}: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />

        <div className="ml-4 rounded-md bg-white px-3 py-1 text-xs text-slate-500">
          lunecia.in
        </div>
      </div>

      <div className="relative h-56 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 flex items-center justify-center">

        {children}

      </div>

    </div>
  );
}