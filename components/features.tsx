import { Layers, Paintbrush, Zap } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "50+ Components",
    description: "Cards, buttons, forms, modals, and more",
  },
  {
    icon: Paintbrush,
    title: "Fully Customizable",
    description: "Easy to modify colors, fonts, and styles",
  },
  {
    icon: Zap,
    title: "Starter + Code",
    description: "Starter files and production-ready code",
  },
]

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto justify-items-center items-center">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border"
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
            <feature.icon className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
