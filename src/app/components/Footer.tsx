export default function Footer() {
  return (
    <footer className="border-t border-[#19191a] py-12 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/800x800_white_logo.png"
              alt="Era Engines"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
            <span className="font-bold text-sm text-white">Era Engines</span>
          </a>

          <p className="text-sm text-[#949fa6] text-center">
            The developer-first SaaS platform for modern engineering teams.
          </p>

          <div className="flex items-center gap-6 text-sm text-[#949fa6]">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#product" className="hover:text-white transition-colors">Product</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
        </div>

        <div className="border-t border-[#19191a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#949fa6]">
          <p>&copy; {new Date().getFullYear()} Era Engines, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
