import Image from "next/image"

export function ProductPreview() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Preview Image */}
      <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="/images/ui-kit-preview.jpg"
          alt="Starter UI Kit Preview - Modern design components displayed on laptop"
          width={1200}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Floating Badge */}
      <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
        50+ Components
      </div>

      {/* Secondary Preview */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <Image
            src="/images/components-showcase.jpg"
            alt="UI Components showcase - buttons, cards, inputs"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-foreground mb-3">What&apos;s Included</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Figma source files
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              React/Tailwind code
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Dark and light themes
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Lifetime updates
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Commercial license
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
