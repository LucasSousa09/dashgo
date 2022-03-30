import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return (
        <Stack
            direction={["column","row"]}
            spacing="6"
            mt="8"
            justify="space-between"
            align="center"
        >
            <Box>
                <strong>0 </strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationItem buttonNumber={1} isCurrent={true} />            
                <PaginationItem buttonNumber={2} />            
                <PaginationItem buttonNumber={3} />            
                <PaginationItem buttonNumber={4} />            
            </Stack>
        </Stack>
    )
}