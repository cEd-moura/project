// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/project$1.0.0/src/views/cria.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body><h1>Cadastro de Ferramentas</h1><form action=/teste_marko/create method=post><div><label for=description>Descrição:</label><input type=text id=description name=description placeholder=\"coloque a Descrição\"></div><div><label for=price>Preço:</label><input type=number id=price name=price placeholder=\"coloque o preço\"></div><div><label for=typeOfTool>Tipo de Ferramenta:</label><input type=number id=typeOfTool name=typeOfTool placeholder=\"coloque o tipo\"></div><div><label for=code>Código da Ferramenta:</label><input type=text id=code name=code placeholder=\"coloque o código\"></div><div><label for=quantity>Quantidade:</label><input type=number id=quantity name=quantity placeholder=\"coloque a quantidade\"></div><input type=submit value=Salvar></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/project$1.0.0/src/views/cria.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
