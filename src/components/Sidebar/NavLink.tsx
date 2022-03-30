import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../activeLink";

interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType;
    label: string;
    href: string;
}


export function NavLink({icon, label, href, ...rest}: NavLinkProps){
    return (
        <ActiveLink href={href} passHref> 
            <ChakraLink display='flex' alignItems='center' {...rest}>
                <Icon as={ icon } fontSize='20' />
                <Text ml='4' fontWeight='medium'>{ label }</Text>
            </ChakraLink>
        </ActiveLink>

    )
}