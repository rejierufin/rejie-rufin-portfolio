// The download buttons point at profile.resumeUrl in src/data/portfolio.ts.
// If that file is not in public/, the deployed site answers the request with the app
// shell, so the browser saves an HTML page as RUFIN_REJIE_RESUME.htm and Chrome reports
// "File wasn't available on site". Fail the build instead of shipping that.
import { readFileSync, existsSync } from 'node:fs'

const source = readFileSync('src/data/portfolio.ts', 'utf8')

const nameMatch = source.match(/RESUME_FILE\s*=\s*'([^']+)'/)
const urlMatch = source.match(/resumeUrl:\s*'([^/][^']*)'/)
const name = nameMatch ? nameMatch[1] : urlMatch && urlMatch[1].replace(/^\//, '')

if (!name) {
  console.error('check-resume: could not find the resume filename in src/data/portfolio.ts')
  process.exit(1)
}

const file = `public/${name}`

if (!existsSync(file)) {
  console.error(`check-resume: the site links to ${name} but ${file} does not exist.`)
  console.error('Add the resume to public/ under that exact name, or update RESUME_FILE.')
  process.exit(1)
}

const header = readFileSync(file).subarray(0, 5).toString('latin1')
if (header !== '%PDF-') {
  console.error(`check-resume: ${file} is not a PDF (starts with "${header.trim()}").`)
  process.exit(1)
}

console.log(`check-resume: ${file} ok`)
