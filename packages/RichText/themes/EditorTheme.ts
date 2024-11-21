import type { EditorThemeClasses } from "lexical";

import "./EditorTheme.css";
import "./EditorTableTheme.css";

const theme: EditorThemeClasses = {
  autocomplete: "lexicaltheme__autocomplete",
  blockCursor: "lexicaltheme__blockCursor",
  characterLimit: "lexicaltheme__characterLimit",
  code: "lexicaltheme__code",
  codeHighlight: {
    atrule: "lexicaltheme__tokenAttr",
    attr: "lexicaltheme__tokenAttr",
    boolean: "lexicaltheme__tokenProperty",
    builtin: "lexicaltheme__tokenSelector",
    cdata: "lexicaltheme__tokenComment",
    char: "lexicaltheme__tokenSelector",
    class: "lexicaltheme__tokenFunction",
    "class-name": "lexicaltheme__tokenFunction",
    comment: "lexicaltheme__tokenComment",
    constant: "lexicaltheme__tokenProperty",
    deleted: "lexicaltheme__tokenProperty",
    doctype: "lexicaltheme__tokenComment",
    entity: "lexicaltheme__tokenOperator",
    function: "lexicaltheme__tokenFunction",
    important: "lexicaltheme__tokenVariable",
    inserted: "lexicaltheme__tokenSelector",
    keyword: "lexicaltheme__tokenAttr",
    namespace: "lexicaltheme__tokenVariable",
    number: "lexicaltheme__tokenProperty",
    operator: "lexicaltheme__tokenOperator",
    prolog: "lexicaltheme__tokenComment",
    property: "lexicaltheme__tokenProperty",
    punctuation: "lexicaltheme__tokenPunctuation",
    regex: "lexicaltheme__tokenVariable",
    selector: "lexicaltheme__tokenSelector",
    string: "lexicaltheme__tokenSelector",
    symbol: "lexicaltheme__tokenProperty",
    tag: "lexicaltheme__tokenProperty",
    url: "lexicaltheme__tokenOperator",
    variable: "lexicaltheme__tokenVariable",
  },

  table: "lexicaltheme__table",
  tableCell: "lexicaltheme__tableCell",
  tableCellActionButton: "lexicaltheme__tableCellActionButton",
  tableCellActionButtonContainer:
    "lexicaltheme__tableCellActionButtonContainer",
  tableCellEditing: "lexicaltheme__tableCellEditing",
  tableCellHeader: "lexicaltheme__tableCellHeader",
  tableCellPrimarySelected: "lexicaltheme__tableCellPrimarySelected",
  tableCellResizer: "lexicaltheme__tableCellResizer",
  tableCellSelected: "lexicaltheme__tableCellSelected",
  tableCellSortedIndicator: "lexicaltheme__tableCellSortedIndicator",
  tableResizeRuler: "lexicaltheme__tableCellResizeRuler",
  tableRowStriping: "lexicaltheme__tableRowStriping",
  tableSelected: "lexicaltheme__tableSelected",
  tableSelection: "lexicaltheme__tableSelection",

  embedBlock: {
    base: "lexicaltheme__embedBlock",
    focus: "lexicaltheme__embedBlockFocus",
  },
  hashtag: "lexicaltheme__hashtag",
  heading: {
    h1: "lexicaltheme__h1",
    h2: "lexicaltheme__h2",
    h3: "lexicaltheme__h3",
    h4: "lexicaltheme__h4",
    h5: "lexicaltheme__h5",
    h6: "lexicaltheme__h6",
  },
  hr: "lexicaltheme__hr",
  image: "editor-image",
  indent: "lexicaltheme__indent",
  inlineImage: "inline-editor-image",
  layoutContainer: "lexicaltheme__layoutContainer",
  layoutItem: "lexicaltheme__layoutItem",
  link: "lexicaltheme__link",
  list: {
    checklist: "lexicaltheme__checklist",
    listitem: "lexicaltheme__listItem",
    listitemChecked: "lexicaltheme__listItemChecked",
    listitemUnchecked: "lexicaltheme__listItemUnchecked",
    nested: {
      listitem: "lexicaltheme__nestedListItem",
    },
    olDepth: [
      "lexicaltheme__ol1",
      "lexicaltheme__ol2",
      "lexicaltheme__ol3",
      "lexicaltheme__ol4",
      "lexicaltheme__ol5",
    ],
    ul: "lexicaltheme__ul",
  },
  ltr: "lexicaltheme__ltr",
  mark: "lexicaltheme__mark",
  markOverlap: "lexicaltheme__markOverlap",
  paragraph: "lexicaltheme__paragraph",
  quote: "lexicaltheme__quote",
  rtl: "lexicaltheme__rtl",
  text: {
    bold: "lexicaltheme__textBold",
    code: "lexicaltheme__textCode",
    italic: "lexicaltheme__textItalic",
    strikethrough: "lexicaltheme__textStrikethrough",
    subscript: "lexicaltheme__textSubscript",
    superscript: "lexicaltheme__textSuperscript",
    underline: "lexicaltheme__textUnderline",
    underlineStrikethrough: "lexicaltheme__textUnderlineStrikethrough",
  },
};

export default theme;
