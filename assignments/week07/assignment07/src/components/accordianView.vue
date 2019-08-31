<template>
    <main class="main">
    <h2>Parts of a Web Page</h2>
    <p>
      A web page is made up of three basic parts.  The content, the style, and the action.  The content uses HTML to provide a structure to the the information you want your page to provide to the reader.
      Next is the style, this uses CSS.  The style of a web page is how you want to present the information to the reader.  And finally, the action.
      Static pages were all the rage in the 1990's but now pages need to be able to interact with the reader, collect information and much much more.  On the browser side the action is most likely to be Javascript.
    </p><p>
      Click each icon below to read more about Content, Style, and Action.
    </p>
<!-- Begin Accordian Bars  -->
    <div class="accordion" id="accordionExample">
      <div class="card bg-info">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed  bg-light" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="fab fa-html5 fa-3x navbar-brand"></i>
            </button>
          </h2>
        </div>

        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            HTML 5 (formerly and commonly spelled HTML5) is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it.

            HTML 5 is the fifth and current major version of HTML, and subsumes XHTML. The current standard, the HTML Living Standard is developed by WHATWG, which is made up of the major browser vendors (Apple, Google, Mozilla, and Microsoft), with the Living Standard also existing in an abridged version.

            HTML 5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the latest multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML 5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.

            HTML 5 includes detailed processing models to encourage more interoperable implementations; it extends, improves and rationalizes the markup available for documents, and introduces markup and application programming interfaces (APIs) for complex web applications. For the same reasons, HTML 5 is also a candidate for cross-platform mobile applications, because it includes features designed with low-powered devices in mind.

            Many new syntactic features are included. To natively include and handle multimedia and graphical content, the new video, audio and canvas elements were added, and support for scalable vector graphics (SVG) content and MathML for mathematical formulas. To enrich the semantic content of documents, new page structure elements such as main, section, article, header, footer, aside, nav, and figure are added. New attributes are introduced, some elements and attributes have been removed, and others such as a, cite, and menu have been changed, redefined, or standardized.

            The APIs and Document Object Model (DOM) are now fundamental parts of the HTML 5 specification and HTML 5 also better defines the processing for any invalid documents.
            From Wikipedia (https://en.wikipedia.org/wiki/HTML5)
          </div>
        </div>
      </div>
      <div class="card bg-info">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed bg-light" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="fab fa-css3-alt fa-3x navbar-brand"></i>
            </button>
          </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div class="card-body">
            Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

            CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.

            Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.

            The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable.

            The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents.

            In addition to HTML, other markup languages support the use of CSS including XHTML, plain XML, SVG, and XUL.
            From Wikipedia (https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
          </div>
        </div>
      </div>
      <div class="card bg-info">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed bg-light" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <i class="fab fa-js-square fa-3x navbar-brand"></i>
            </button>
          </h2>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div class="card-body">
            JavaScript (/ˈdʒɑːvəˌskrɪpt/),[8] often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

            Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated JavaScript engine to execute it.

            As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has APIs for working with text, arrays, dates, regular expressions, and the DOM, but the language itself does not include any I/O, such as networking, storage, or graphics facilities. It relies upon the host environment in which it is embedded to provide these features.

            Initially only implemented client-side in web browsers, JavaScript engines are now embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software, and in runtime environments that make JavaScript available for writing mobile and desktop applications, including desktop widgets.

            The terms Vanilla JavaScript and Vanilla JS refer to JavaScript not extended by any frameworks or additional libraries. Scripts written in Vanilla JS are plain JavaScript code.

            Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design. JavaScript was influenced by programming languages such as Self and Scheme. The JSON serialization format, used to store data structures in files or transmit them across networks, is based on JavaScript
            From Wikipedia (https://en.wikipedia.org/wiki/Javascript)
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
 name: 'accordianView'   
}
</script>

<style scoped>

</style>