import { type NextRequest, NextResponse } from "next/server"
import { generateObject } from "ai"
import { openai } from "@ai-sdk/openai"
import { z } from "zod"

const AnalysisSchema = z.object({
  category: z.enum(["login", "homepage", "dashboard", "profile", "settings", "mobile", "other"]),
  confidence: z.number().min(0).max(1),
  description: z.string(),
  features: z.array(z.string()),
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("image") as File

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 })
    }

    // Convert file to base64 for AI analysis
    const bytes = await file.arrayBuffer()
    const base64 = Buffer.from(bytes).toString("base64")
    const dataUrl = `data:${file.type};base64,${base64}`

    const { object } = await generateObject({
      model: openai("gpt-4o"),
      schema: AnalysisSchema,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analyze this screenshot and categorize it. Identify the type of UI screen (login, homepage, dashboard, profile, settings, mobile, or other) and provide a confidence score. Also describe what you see and list key features.",
            },
            {
              type: "image",
              image: dataUrl,
            },
          ],
        },
      ],
    })

    return NextResponse.json(object)
  } catch (error) {
    console.error("Analysis error:", error)
    return NextResponse.json({ error: "Failed to analyze screenshot" }, { status: 500 })
  }
}
