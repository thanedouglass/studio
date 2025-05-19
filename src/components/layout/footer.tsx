export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Veritas Hub. All rights reserved.</p>
        <p className="text-sm mt-1">Empowering Discovery, Fostering Innovation.</p>
      </div>
    </footer>
  );
}
