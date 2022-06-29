import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, Markdown } from "grommet";
import test1 from "../posts/test1.md";
import test2 from "../posts/test2.md";
import test3 from "../posts/test3.md";

const firstPage = `
  #POST

  ## POST를 읽기 위해 번호를 CLICK 해주세요.
  ## For Read Posts, please click numbers.
`;

const Post = () => {
  const [md, setMd] = useState("");

  const Posts = [test1, test2, test3];

  const renderMd = useCallback(
    (idx) => {
      fetch(Posts[idx])
        .then((res) => res.text())
        .then((text) => setMd(text));
    },
    [Posts, md]
  );

  return (
    <>
      <PostNumberWrapper>
        {Array.from(Array(Posts.length), (_, index) => (
          <Button onClick={() => renderMd(index)}>{index + 1}</Button>
        ))}
      </PostNumberWrapper>
      <Box align="center" pad="large">
        <Markdown components={{ pre: StyledPre }}>{md ? md : firstPage}</Markdown>
      </Box>
    </>
  );
};

const PostNumberWrapper = styled.div`
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  button {
    border: 1px solid #ddd;
    display: inline-block;
    min-width: 20px;
    text-align: center;
    font-size: 20px;
  }
`;

const StyledPre = styled.pre`
  background-color: #7d4cdb;
`;

export default Post;
