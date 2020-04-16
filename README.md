**MVVM**

* Knockout.js  

*  ng
*  vue
*  react

**Blazor**

* ASP.NET Core 3.x

* ASP.NET Blazor

  * **server** (SignalR => ws, 轮询，长轮询) 
    		DOM - Event => Server
    		Updat VDOM => VDOM => CLient (Browser) => Update DOM 
  * **wasm**  (WebAssembly)
    * HTML
    * CSS
    * JavaScript (TS, CoffeeScript, Dart->Sky->Dart-Flutter, JSCore ...)
      * 08~12 	Mozilla => asm.js => webassembly
    * WebAssembly (类似于 IL)
      * (Rust，C#（Blazor, Uno, OpenSilver）, Golang, C / C++)
      * => wasm
      * => JIT （V8）
      * *.js -> 
      * C# =>(Rosly csc.exe) ==> IL (*.dll mono-wasm) ==> wasm ==> publsh ==> JIT ==> ByteCode(机器相关)
      * target => .NET Framework  / Core  Runtime （CLR）
      * webassembly (2019下半年，wasm已经是w3c)
      * (wasm) LLVM (Low level virual machine) =>  ByteCode
      * pros：
        * proformence
          * Almost near to non Optimized C++;
        * code-base unify (node.js )
          * enum
          * Model 
          * DTO (Contact)
          * validation
        * community
          * charp：vidio, crop image, 灰度化图片，加水印，QRCode扫描二维码，生成PDF/DOC，GPU。
        * grpc，js-grpc 
        * unit test
          * JS:（jest.js）
          * wasm (Balzor) C# Unit Test (xUnit, NUnit, .., )
            Moq
          * CI/CD Test Integration:
            * Jenkins, Aazure DevOps
      * cons:
        * community （lib, pulgin, framework, community）
          * js: jquery, mvvm pulugin,
        * （freedom）sytax
    * wasm ❤ js
      * Blazor ❤ js
      * 互操作
      * https://docs.microsoft.com/en-us/aspnet/core/blazor/integrate-components?view=aspnetcore-3.1
      * 

  

  * MonoWasm
    * Steve Sanderson: 1st Engineer of Blazor
      * https://github.com/SteveSandersonMS
    * mono.wasm
      * dotnet *.dll
      * dotnet-runtime.js


​		
​			
