import React, {useState} from 'react';
import styled from "styled-components";
import profilePic from '../assets/img/profile-pic-2021-09-26.jpg';
import {Drawer} from "antd";
import {useWindowSize} from "../hooks/useWindowSize";
import {
    MenuOutlined,
} from '@ant-design/icons';

const HeaderWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: -1px;
    background-color: rgba(0,0,0,0.3);
    z-index: 2;
    color: white;
`;

const HeaderSection = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderItem = styled.div`
    margin-left: 10px;
`;

const DrawerItem = styled.div`
    color: black;
    font-size: 24px;
    margin-bottom: 5px;
`;

const ProfileImg = styled.img`
    width: 24px;
    border-radius: 50%;
`;

const links = [
    {
        title: 'LINKEDIN',
        url: 'https://www.linkedin.com/in/alessiosymons',
    },
    {
        title: 'GITHUB',
        url: 'https://github.com/asymons',
    },
    {
        title: 'MEDIUM',
        url: 'https://medium.com/@alessiosymons',
    },
];

type ProfileSectionProps = {
    fontSize: number;
    sectionMargin?: string;
}

const ProfileSection = ({fontSize, sectionMargin}: ProfileSectionProps) => (
    <HeaderSection style={{margin: sectionMargin !== undefined ? sectionMargin : "0 20px"}}>
        <HeaderItem>
            <ProfileImg src={profilePic}/>
        </HeaderItem>
        <HeaderItem style={{fontWeight: 600, fontSize}}>
            Alessio Symons
        </HeaderItem>
    </HeaderSection>
);


const Header = () => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [windowWidth, windowHeight] = useWindowSize();


    return (
        <>
            <HeaderWrapper>

        {windowWidth <= 768 ? (
            <HeaderSection style={{marginLeft: 20}}>
                <MenuOutlined style={{fontSize: 24, color: 'white'}} onClick={() => setIsDrawerVisible(true)}/>
            </HeaderSection>

            ) : (
                <>
                    <ProfileSection fontSize={24}/>
                    <HeaderSection style={{margin: "0 20px"}}>
                        {links.map(({title, url}) => (
                            <HeaderItem>
                                <a
                                    href={url}
                                    key={title}
                                    target="_blank"
                                >
                                    {title}
                                </a>
                            </HeaderItem>
                        ))}
                    </HeaderSection>
                </>
        )}
            <Drawer
                title={<ProfileSection sectionMargin="0" fontSize={16}/>}
                placement="left"
                onClose={() => setIsDrawerVisible(false)}
                visible={isDrawerVisible}
            >
                {links.map(({title, url}) => (
                    <DrawerItem>
                        <a
                            href={url}
                            key={title}
                            target="_blank"
                        >
                            {title}
                        </a>
                    </DrawerItem>
                ))}
            </Drawer>
            </HeaderWrapper>

            </>
    );
};

export default Header;
