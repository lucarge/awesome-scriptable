// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: exclamationTriangle;
const url = 'https://status.slack.com'
const positives = ['Smooth sailing']

const fetchUrl = async (endpoint) => {
  const request = new Request(endpoint)
  const body = await request.loadString()

  return body
}

(async () => {
  const body = await fetchUrl(url)
  Safari.openInApp(url)

  const statusIsGreen = positives.some(body.includes.bind(body))

  if (config.runsWithSiri) {
    if (statusIsGreen) {
      Speech.speak('Yes')
    } else {
      Speech.speak('No')
    }
  }
})()
