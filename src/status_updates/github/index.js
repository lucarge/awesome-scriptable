// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-brown; icon-glyph: magic;
const url = 'https://status.github.com/messages'
const positives = [
  'All systems reporting at 100%',
  'Everything operating normally.',
]

const fetchUrl = async (endpoint) => {
  const request = new Request(endpoint)
  const body = await request.loadString()

  return body
}

(async () => {
  const body = await fetchUrl(url)
  Safari.openInApp(url)

  const lastUpdate = body.split('class="message_group"')[1]

  if (config.runsWithSiri) {
    if (positives.some(lastUpdate.includes.bind(lastUpdate))) {
      Speech.speak('Yes')
    } else {
      Speech.speak('No')
    }
  }
}
)()
