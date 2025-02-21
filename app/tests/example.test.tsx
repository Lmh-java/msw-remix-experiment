import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  http.post("https://oauth2.googleapis.com/token", () => {
    return HttpResponse.json({});
  }),
];

export const server = setupServer(...handlers);

describe("Test cases", () => {
  beforeEach(() => server.listen());

  /**
   * 
   * In the negative sample, the response produces a header that contains plain/text as the Content-Type
   */
  it("Test if content type is application/json", async () => {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
    });
    
    console.log(response);
    expect(response.headers.get("Content-Type")).toEqual("application/json");
  });

  /*
    In the negative sample, `ah` returns an empty header object. 
    This shows in the msw update, the Headers copy constructor is no longer working.
    However, it works fine in this experiment.
  */
  it("Test if copy constructor of Headers is working", async () => {
    const h = new Headers();
    h.set("Content-Type", "application/json");
    const ah = new Headers(h);

    console.log(ah);
    expect(h).toEqual(ah);
    expect(ah.get("Content-Type")).toEqual("application/json");
  });
})
