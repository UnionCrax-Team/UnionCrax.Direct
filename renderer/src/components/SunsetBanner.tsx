import { AlertTriangle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SunsetBanner() {
  return (
    <div className="relative z-40 mx-4 mt-3 mb-0 overflow-hidden rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5 backdrop-blur-md shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-2.5 min-w-0">
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400 mt-0.5 sm:mt-0" />
          <div className="text-xs leading-relaxed text-foreground/90">
            <span className="font-bold text-amber-300 mr-1.5 uppercase tracking-wide text-[11px]">
              Sunset Advisory (Ends Oct 5, 2026):
            </span>
            <span>
              Official UC.Direct development and support ends on October 5, 2026 due to storage costs. Please migrate to the actively maintained fork{" "}
              <strong className="text-primary font-semibold">Union.Manifold</strong>.
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <Button
            size="sm"
            className="h-7 text-xs rounded-lg font-bold bg-primary text-primary-foreground hover:brightness-110"
            onClick={() => {
              window.ucSystem?.openExternal?.("https://github.com/fyiel/Union.Manifold")
            }}
          >
            Get Union.Manifold
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
