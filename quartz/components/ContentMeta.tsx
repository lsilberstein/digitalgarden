import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"

export default (() => {
  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text
    if (text) {
      const segments: string[] = []
      const { text: timeTaken, words: _words } = readingTime(text)
      const frontmatter = fileData.frontmatter
      const vlnr = frontmatter?.vorlesungnr
      const kurs = frontmatter?.kurs

      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)!))
      }

      segments.push(timeTaken)

      if (vlnr) {
        segments.push(`Vorlesung ${vlnr}`)
      }

      if (kurs) {
        segments.push(`${kurs}`)
      }
      return <p class={`content-meta ${displayClass ?? ""}`}>{segments.join(", ")}</p>

    } else {
      return null
    }
  }

  ContentMetadata.css = `
  .content-meta {
    margin-top: 0;
    color: var(--gray);
  }
  `
  return ContentMetadata
}) satisfies QuartzComponentConstructor
