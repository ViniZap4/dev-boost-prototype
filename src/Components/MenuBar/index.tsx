import React, {useRef, useState, useEffect} from 'react';
import MenuBoxItem from '../MenuBoxItem';
import MenuItem from '../MenuItem';
import { externalLink, MenuContents, pagesItens } from './contents';

import { Container } from './styles';



const MenuBar: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
 
  function handleResize(time: number){
    if (ref !== null){
      setTimeout(() => {
        const widthElement = ref.current?.offsetWidth;
        setWidth(Number(widthElement));
      }, time);
    }
  }

  useEffect(() => {
    handleResize(0); 
    window.addEventListener("resize", () => handleResize(369));   
  },[])

  

  return (
    <Container ref={ref} width={width}  >
      <MenuBoxItem>
        {pagesItens?.map((page, index) => (
         <MenuItem title={page.title} icon={page.icon} />
        ))}
      </MenuBoxItem>
      |
      <MenuBoxItem>
        {externalLink?.map((link, index) => (
          <MenuItem title={link.title} icon={link.icon} />
        ))}
      </MenuBoxItem>
      |
      <MenuBoxItem>
        {MenuContents?.map((contents, index) => (
          <MenuItem title={contents.title} icon={contents.icon} />
        ))}
      </MenuBoxItem>
    </Container>
);
}

export default MenuBar;