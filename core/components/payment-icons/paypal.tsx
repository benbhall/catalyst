import React from 'react';

export const PayPalIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({ ...props }) => (
  <svg
    fill="currentColor"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m2 4c-.55228 0-1 .44772-1 1v14c0 .5523.44772 1 1 1h20c.5523 0 1-.4477 1-1v-14c0-.55228-.4477-1-1-1zm-2 1c0-1.10457.895431-2 2-2h20c1.1046 0 2 .89543 2 2v14c0 1.1046-.8954 2-2 2h-20c-1.10457 0-2-.8954-2-2z" />
    <path d="m9.90233 8.88636c.05681-.50752.48757-.88636.99437-.88636h4.085c1.6635 0 3.0183 1.33971 3.0183 3 0 2.2126-1.8058 4-4.0256 4h-.5508l-.4304 2.5822c-.0402.2411-.2488.4178-.4932.4178h-2.4995c-.59238 0-1.06083-.5127-.99428-1.1073l.89611-8.00634.49387.05527zm.99357.11369-.8954 7.99995h2.0759l.4304-2.5822c.0402-.2411.2488-.4178.4932-.4178h.9744c1.6744 0 3.0256-1.3466 3.0256-3 0-1.10113-.9002-2-2.0183-2z" />
    <path d="m8.3383 7.00204c-.00002.00002.00003-.00002 0 0 .00122-.00104.00304-.00204.00641-.00204h4.62439c1.1275 0 2.0309.90119 2.0309 1.99999 0 1.65111-1.3567 3.00001-3.0432 3.00001h-1.96845c-.27614 0-.5.2239-.5.5s.22386.5.5.5h1.96845c2.2272 0 4.0432-1.7851 4.0432-4.00001 0-1.66261-1.3628-2.99999-3.0309-2.99999h-4.62439c-.49433 0-.9218.35885-.99537.85386l-1.3323 8.96374c-.11624.6207.36647 1.1824.9893 1.1824h2.4196c.27614 0 .5-.2239.5-.5s-.22386-.5-.5-.5h-2.4196c-.00214 0-.00327-.0002-.00368-.0003-.00031-.0002-.00166-.0007-.00209-.0011.00151-.0077.00285-.0154.004-.0231z" />
  </svg>
);