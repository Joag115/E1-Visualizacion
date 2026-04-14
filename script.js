const hospitales = [
  "Hospital A",
  "Hospital B",
  "Hospital C",
  "Hospital D",
  "Hospital E"
];

const ocupacion = [92, 88, 85, 79, 73];

const trace = {
  x: ocupacion,
  y: hospitales,
  type: "bar",
  orientation: "h"
};

const layout = {
  title: "Índice de ocupación hospitalaria",
  xaxis: { title: "Porcentaje de ocupación" },
  yaxis: { title: "Establecimiento" },
  margin: { l: 180, r: 30, t: 60, b: 60 }
};

Plotly.newPlot("grafico", [trace], layout, {
  displayModeBar: false
});
