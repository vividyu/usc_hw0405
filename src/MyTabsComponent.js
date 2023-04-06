import React, { useContext } from "react";
import styled from "styled-components";

const IconContext = React.createContext(false);

const TagWrapper = styled.div`
  display: inline-block;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const ContentWrapper = styled.div`
  display: inline-block;
  padding: 0.5em;
  background-color: ${(props) => props.color || "red"};
  border-radius: ${(props) => props.borderRadius || "1em"};
`;

const Tag = ({ children, color, borderRadius }) => {
    return (
        <TagWrapper>
            <IconContext.Provider value={true}>
                {React.Children.map(children, (child) => {
                    if (child.props.title) {
                        return (
                            <>
                                <Title>{child.props.title}</Title>
                                <ContentWrapper color={color} borderRadius={borderRadius}>
                                    {child.props.children}
                                </ContentWrapper>
                            </>
                        );
                    }
                    return child;
                })}
            </IconContext.Provider>
        </TagWrapper>
    );
};

const Icon = ({ src }) => {
    const insideTag = useContext(IconContext);
    return (
        <StyledIcon
            src={src}
            insideTag={insideTag}
            onMouseEnter={(e) => {
                if (insideTag) e.target.style.filter = "blur(0)";
            }}
            onMouseLeave={(e) => {
                if (insideTag) e.target.style.filter = "blur(6px)";
            }}
        />
    );
};

const StyledIcon = styled.img`
  /* filter: ${(props) => (props.insideTag ? "blur(6px)" : "blur(0)")}; */
  filter: ${(props) => "blur(6px)"};
  width: 32px;
  height: 32px;

  ${(props) =>
        props.insideTag &&
        `
    &:hover {
      filter: blur(0);
    }
  `}
`;

export { Tag, Icon };
