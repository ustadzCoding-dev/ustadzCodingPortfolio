const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Afrizal Ilza Munadhif. All rights reserved.</p>
      <p className="font-mono text-xs">Built with precision & purpose</p>
    </div>
  </footer>
);

export default Footer;
