const Footer = () => {
  return (
    <footer className="bg-card/60 backdrop-blur-md py-8 px-4 border-t-2 border-accent/50">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-accent">سعد موبائل</span>
            <span className="text-foreground"> & </span>
            <span className="text-accent">طلحہ جنرل سٹور</span>
          </h3>
          <p className="text-muted-foreground mb-4">
            Saad Mobile & Talha General Store
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-foreground">
            <span>Mobile Load</span>
            <span>•</span>
            <span>EasyPaisa</span>
            <span>•</span>
            <span>JazzCash</span>
            <span>•</span>
            <span>General Store</span>
          </div>
          <div className="highlight-strip inline-block mb-4">
            Everything You Need – All in One Place!
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            © {new Date().getFullYear()} Saad Mobile & Talha General Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
