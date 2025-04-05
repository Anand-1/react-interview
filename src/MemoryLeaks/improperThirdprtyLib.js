import React from "react";
import SomeChartLibrary from "some-chart-library";
function improperThirdprtyLib() {
  useEffect(() => {
    const chart = new SomeChartLibrary("chart-container", {
      /* config */
    });

    // Missing cleanup
    return () => chart.destroy();
  }, []);

  return <div id="chart-container"></div>;
}

export default improperThirdprtyLib;
