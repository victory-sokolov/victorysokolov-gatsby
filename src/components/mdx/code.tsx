import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import React, { useState } from "react";
import styled from 'styled-components';

type Code = {
  codeString: string,
  language: Language,
  props: any
}

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const CopyButton = (props: any) => (
  <button
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      border: "none",
      boxShadow: "none",
      textDecoration: "none",
      margin: "8px",
      padding: "8px 12px",
      background: "#E2E8F022",
      color: "white",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px",
      fontFamily: "sans-serif",
      lineHeight: "1",
    }}
    {...props}
  />
)

export const Code = ({ codeString, language, ...props }: Code) => {

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 4000);
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style}>
            <CopyButton onClick={copyToClipboard}>
              {isCopied ? "🎉 Copied!" : "Copy"}
            </CopyButton>
            {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};


