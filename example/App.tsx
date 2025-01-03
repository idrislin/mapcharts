import React, { useState } from "react";
import LexicalRichTextEditor from "../packages";
import "../packages/RichText/themes/EditorTableTheme.css";

const App: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ height: "100%" }}>
      <div style={{ padding: "40px" }}>
        <LexicalRichTextEditor
          onChange={(value) => {
            console.log(value);
            setValue(value);
          }}
          // defaultValue={`<p class="CommentEditorTheme__paragraph"><a href="tel:123" target="" rel="noreferrer" class="lexicaltheme__link"><b><strong class="lexicaltheme__textBold" style="color: rgb(126, 211, 33); white-space: pre-wrap;">商品描述</strong></b></a><b><strong class="lexicaltheme__textBold" style="color: rgb(126, 211, 33); white-space: pre-wrap;"> </strong></b></p><p class="CommentEditorTheme__paragraph"><b><strong class="lexicaltheme__textBold" style="color: rgb(126, 211, 33); white-space: pre-wrap;">324</strong></b></p>`}
          // defaultValue={`<p class="CommentEditorTheme__paragraph" dir="ltr"><b><strong class="lexicaltheme__textBold" style="color: rgb(126, 211, 33); white-space: pre-wrap;">商品描述</strong></b></p>`}
          defaultValue={`<p class="CommentEditorTheme__paragraph" dir="ltr"><a href="tel:123" rel="noreferrer" class="lexicaltheme__link"><b><strong class="lexicaltheme__textBold" style="color: rgb(126, 211, 33); white-space: pre-wrap;">商品描述</strong></b></a></p>`}
          // defaultValue={`<p class="CommentEditorTheme__paragraph"><img src="https://cdn.shopify.com/s/files/1/0728/3825/0805/files/bluetti-black-friday-002.png?v=1730977833" alt="" width="inherit" height="inherit"></p>`}
          // defaultValue={`<table class="lexicaltheme__table"><colgroup><col style="width: 92px;"></colgroup><tbody><tr><td class="lexicaltheme__tableCell" style="width: 75px; border: 1px solid black; vertical-align: top; text-align: start;"><p class="CommentEditorTheme__paragraph" style="text-align: start;"><br></p></td></tr><tr><td class="lexicaltheme__tableCell" style="width: 75px; border: 1px solid black; vertical-align: top; text-align: start;"><p class="CommentEditorTheme__paragraph" style="text-align: start;"><br></p></td></tr><tr><td class="lexicaltheme__tableCell" style="width: 75px; border: 1px solid black; vertical-align: top; text-align: start;"><p class="CommentEditorTheme__paragraph" style="text-align: start;"><br></p></td></tr><tr><td class="lexicaltheme__tableCell" style="width: 75px; border: 1px solid black; vertical-align: top; text-align: start;"><p class="CommentEditorTheme__paragraph" style="text-align: start;"><br></p></td></tr></tbody></table><p class="CommentEditorTheme__paragraph"><a href="https://baidu.com" rel="noreferrer" class="lexicaltheme__link"><span style="white-space: pre-wrap;">123</span></a></p>`}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: value }}
        // className="prose prose-ol:!list-disc prose-ul:!list-disc"
      ></div>
    </div>
  );
};

export default App;
