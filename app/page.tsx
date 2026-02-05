import { Button } from "@/components/ui/button"
import { ProductPreview } from "@/components/product-preview"
import { Features } from "@/components/features"
import { Download, Star, Check, Zap } from "lucide-react"

const GUMROAD_PRODUCT_URL = "https://mughalicious27.gumroad.com/l/vgvgh"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-foreground">Starter UI</span>
          <nav className="flex items-center gap-6">
            <a href="#preview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Preview
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a
              href={GUMROAD_PRODUCT_URL}
              className="gumroad-button text-sm bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Buy Now
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-1.5 mb-8">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm text-muted-foreground">Trusted by 2,000+ designers</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance mb-6">
            Build beautiful interfaces faster
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 text-pretty">
            A premium UI kit with 50+ polished components. 
            Stop designing from scratch. Ship your projects in record time.
          </p>

          {/* Pricing Box */}
          <div className="inline-flex flex-col items-center bg-card border border-border rounded-2xl p-8 mb-8">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-foreground">$29</span>
              <span className="text-muted-foreground line-through">$49</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">One-time purchase. Lifetime access.</p>
            
            {/* Gumroad Buy Button */}
            <a
              href={GUMROAD_PRODUCT_URL}
              className="gumroad-button inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity min-w-[240px]"
            >
              <Download className="w-5 h-5" />
              Buy Now - $29
            </a>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-accent" />
                Instant download
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-accent" />
                Figma + Code
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-accent" />
                Free updates
              </span>
            </div>
          </div>
        </div>

        {/* Product Preview */}
        <div id="preview">
          <ProductPreview />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-secondary/30 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-foreground text-center mb-4">
            Everything you need to ship faster
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Designed for modern applications. Built with best practices.
          </p>
          <Features />
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">2,000+</div>
              <div className="text-muted-foreground">Happy customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">50+</div>
              <div className="text-muted-foreground">Components included</div>
            </div>
            <div>
              <div className="flex justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              <div className="text-muted-foreground">5-star rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to start building?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join thousands of designers who are shipping faster with Starter UI.
          </p>
          <a
            href={GUMROAD_PRODUCT_URL}
            className="gumroad-button inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            <Download className="w-5 h-5" />
            Get Started - $29
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">
            Starter UI Kit - Built for modern designers
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
