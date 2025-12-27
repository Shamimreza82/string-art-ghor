
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">String Art Ghor</h3>
            <p className="text-muted-foreground">
              Creating beautiful and unique string art pieces for your home and office.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground"><Facebook /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Instagram /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin /></a>
            </div>
            <div className="mt-4 flex items-center">
               <a href="https://wa.me/8801939213220" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +8801939213220
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} String Art Ghor. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
