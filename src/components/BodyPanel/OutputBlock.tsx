import { MessageSquareCode } from "lucide-react";

type Props = {
  id: string;
  code: string;
};
function OutputBlock({ id, code }: Readonly<Props>) {
  const html = `
   <html>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700|Google+Sans:300,400,500,600,700|Google+Sans+Text:400,500,700&amp;display=block" rel="stylesheet">
      <style>
         body {
            margin: 0;
            padding: 0;
            overflow: auto;
            color: #ffffff;
            font-size: 14px;
            font-family: 'Consolas', monospace;
         }
         pre {
            white-space: pre-wrap;
            word-wrap: break-word;
         }

         #output {
            white-space: pre-wrap;
         }
      </style>
    </head>
    <body>
        <div id="output"></div>
        <script>
            function print(...args) {
                const message = args.map(arg => {
                    if (typeof arg === "object") {
                        return JSON.stringify(arg, null, 2);
                    }
                    return String(arg);
                }).join(" ");
                const output = document.querySelector("#output");
                output.innerHTML += message + "<br>";
            }

            const log = console.log;
            console.log = function(...args) {
                log.apply(console, args);
                print(...args);
            };

            const error = console.error;
            console.error = function(...args) {
                error.apply(console, args);
                print(...args);
            };
        </script>

        <script>
            try {
                ${code}
            } catch (e) {
                output.innerHTML += "⚠️ Error: " + e.message;
                console.error(e);
            }
        </script>
    </body>
   </html>`;
  return (
    <div className="max-h-40 overflow-y-auto flex">
      <div className="w-12 place-items-center px-2">
        <MessageSquareCode className="" />
      </div>
      <iframe
        title={`output-${id}`}
        sandbox="allow-scripts"
        srcDoc={html}
        width={"100%"}
        height={"100%"}
        className="px-[10px]"
      />
    </div>
  );
}

export default OutputBlock;
