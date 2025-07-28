export type ProjectType = "mobile" | "desktop" | "website"

export interface Screenshot {
  id: string
  name: string
  file: File
  url: string
  category?: string
  confidence?: number
  uiElements?: string[]
}

export interface TemplateSlot {
  x: number
  y: number
  w: number
  h: number
  minW?: number
  minH?: number
  maxW?: number
  maxH?: number
  isResizable?: boolean
  isDraggable?: boolean
  // Visual Effects
  rotation?: number
  zIndex?: number
  shadow?: "xs" | "sm" | "md" | "lg" | "xl" | "harsh" | "fold"
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"
  opacity?: number
  // Special Effects
  deviceFrame?: "iphone" | "android" | "browser"
  browserFrame?: boolean
  polaroidFrame?: boolean
  comicPanel?: boolean
  // Advanced Visual Properties
  shape?: "rectangle" | "circle" | "hexagon" | "star" | "diamond"
  neonGlow?: "blue" | "purple" | "pink" | "cyan" | "green" | "orange" | "red"
  holographicEffect?: boolean
  borderGlow?: string
  watercolorEffect?: "blue" | "purple" | "pink" | "green" | "orange" | "yellow"
  foldEffect?: "valley" | "mountain"
  isometric?: "top" | "left" | "right" | "front"
  perspective?: string
  vinylRecord?: boolean
  // Layout Properties
  liquidShape?: boolean
  morphShape?: string
  animationDelay?: number
  parallaxSpeed?: number
  hoverEffect?: "lift" | "glow" | "rotate" | "scale"
  // Content Properties
  textBlock?: boolean
  typography?: "swiss" | "modern" | "serif"
  backgroundColor?: string
  // Interactive Properties
  connectionTo?: number
  connectionLines?: number[]
  speechBubble?: string
  thoughtBubble?: boolean
  actionLines?: boolean
  explosionEffect?: boolean
  speedLines?: boolean
  // Artistic Properties
  tornEdges?: boolean
  vintageFilter?: "sepia" | "warm" | "cool" | "faded"
  tape?: "top-left" | "top-right" | "bottom" | "corner" | "side" | "top"
  mirror?: "horizontal" | "vertical" | "both"
  // Technical Properties
  blueprintStyle?: boolean
  measurements?: boolean
  gridLines?: boolean
  technicalDrawing?: boolean
  crossSection?: boolean
  dimensions?: boolean
  floorPlan?: boolean
  elevationView?: boolean
  detailView?: boolean
}

export interface RealProject {
  name: string
  description: string
  platform: string
  industry: string
}

export interface Template {
  id: string
  name: string
  description: string
  category: string
  projectTypes: ProjectType[]
  rows: number
  cols: number
  slots: TemplateSlot[]
  preview: string
  tags: string[]
  realProject?: RealProject
}

export interface ArrangementSlot extends TemplateSlot {
  id: string
  screenshot: Screenshot | null
}
