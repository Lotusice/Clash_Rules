$content = $content.replace(`
proxy-providers:
  provider1:
    <<: *p
    url: ""

  provider2:
    <<: *p
    url: ""
`, `
proxy-providers:
  my_sub:
    <<: *p
    url: "xxx"
`)
