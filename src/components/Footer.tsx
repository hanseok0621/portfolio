const Footer = () => {
  return (
    <footer className="text-center text-sm text-muted-foreground py-6 border-t">
      <p>
        &copy; {new Date().getFullYear()} 김한석. All rights reserved.
      </p>
    </footer>
  );
};

export { Footer };
