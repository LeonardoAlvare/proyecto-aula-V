import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { PowerBIEmbed } from "powerbi-client-react";
import { models, Embed, Report } from "powerbi-client";

declare global {
  interface Window {
    report: Report;
  }
}
function PowerBI() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-2">
        <Button
          icon="pi pi-arrow-left"
          className="mb-4"
          label="Volver"
          text
          onClick={() => navigate("/")}
        />
      </div>
      <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: "8276aea1-8c18-433c-b0fe-3c9a3033098c",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=8276aea1-8c18-433c-b0fe-3c9a3033098c&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          accessToken:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCIsImtpZCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOWQxMmJmM2YtZTRmNi00N2FiLTkxMmYtMWEyZjBmYzQ4YWE0LyIsImlhdCI6MTczMTk0MDA0NCwibmJmIjoxNzMxOTQwMDQ0LCJleHAiOjE3MzE5NDQ0MTcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WUFBQUEyUWZEa1lRTGlhUThYNGhxeU1SdlBERlV4OC9nTGhpRUJKNGJxc3BQWU82V3hZcUptM01WcjZPd01jSWZaMmRpIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQUxWQVJFWiBSRVlFUyIsImdpdmVuX25hbWUiOiJMRU9OQVJETyBERSBKRVNVUyIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjI4MDA6ZTI6MTY4MDozNWE6ZDQ3YzpmMjJhOjlhMTI6N2M2NSIsIm5hbWUiOiJMRU9OQVJETyBERSBKRVNVUyBBTFZBUkVaIiwib2lkIjoiNGIwNjAxYTItYjE5OC00ODhjLWEwZGYtMjAyNmE2ZjQyNGRiIiwicHVpZCI6IjEwMDMyMDAyMTlDOTMwQzgiLCJyaCI6IjEuQVZrQVA3OFNuZmJrcTBlUkx4b3ZEOFNLcEFrQUFBQUFBQUFBd0FBQUFBQUFBQUJaQVBaWkFBLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlYtaUhNcC0xMWhjX3JzaVE2ZG5naGdEUlBXYmZvRTBVaERyLTl5b1hWSVkiLCJ0aWQiOiI5ZDEyYmYzZi1lNGY2LTQ3YWItOTEyZi0xYTJmMGZjNDhhYTQiLCJ1bmlxdWVfbmFtZSI6ImxhbHZhcmV6ckB0ZWNub2NvbWZlbmFsY28uZWR1LmNvIiwidXBuIjoibGFsdmFyZXpyQHRlY25vY29tZmVuYWxjby5lZHUuY28iLCJ1dGkiOiJfOE04V0JVWlAwQ0swSXdDX1YwcUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2lkcmVsIjoiMSAxNiJ9.n-P8ge-As3uz9qKuPk0JF35qckWwEvgghmX9WH32QJtvF_lub8jkCOaUexqk_GKcifvNM7llQIBkHsSujByhn-LT53BUiD1l_Uy3d9iC34SGrnuaCVRUKU0YKiS5b2_YzcHMpQa0T33roRAPKNlwm4qnfKgDnIHkH1gCuuNGHhkzenftGC2MoyoJCBKYs0yXvWk5eOvBhK1mGI1pLMFPRiOErHSOJB02Op1vULtTRjwmjXBsaSWLG6F4g367PhlAeI3N--cbppByQQirh1xGLzAYk5tIvvIb7eBP8vERRoKo_TIFSK47GX16mHb4UJuRI1E4PHB8MUGpGed6zTR5rw",
          tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              () => {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              () => {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              (event: CustomEvent<any> | undefined) => {
                console.log(event?.detail);
              },
            ],
            [
              "visualClicked",
              () => {
                console.log("visual clicked");
              },
            ],
            [
              "pageChanged",
              (event: CustomEvent<any> | undefined) => {
                console.log(event);
              },
            ],
          ])
        }
        cssClassName={"reportClass"}
        getEmbeddedComponent={(embeddedComponent: Embed) => {
          const report = embeddedComponent as Report;
          window.report = report;
        }}
      />
    </div>
  );
}

export default PowerBI;
