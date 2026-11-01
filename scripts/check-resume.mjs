// The download button points at profile.resumeUrl in src/data/portfolio.ts.
// If that file is not in public/, the deployed Worker answers the request with the
// SPA shell, so the browser saves an HTML page as RUFIN_REJIE_RESUME.htm and Chrome
// reports "File wasn't available on site". Fail the build instead of shipping that.
import { readFileSync, existsSync } from 'node:fs'

const source = readFileSync('src/data/portfolio.ts', 'utf8')
const match = source.match(/resumeUrl:\s*'([^']+)'/)

if (!match) {
  console.error('check-resume: could not find resumeUrl in src/data/portfolio.ts')
  process.exit(1)
}

const url = match[1]
const file = `public${url.startsWith('/') ? '' : '/'}${url}`

if (!existsSync(file)) {
  console.error(`check-resume: resumeUrl is "${url}" but ${file} does not exist.`)
  console.error('Add the resume to public/ at that exact path, or update profile.resumeUrl.')
  process.exit(1)
}

const header = readFileSync(file).subarray(0, 5).toString('latin1')
if (header !== '%PDF-') {
  console.error(`check-resume: ${file} is not a PDF (starts with "${header.trim()}").`)
  process.exit(1)
}

console.log(`check-resume: ${url} -> ${file} ok`)
