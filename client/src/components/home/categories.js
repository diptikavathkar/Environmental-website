import { Button,Table, TableBody, TableCell, TableHead,styled, Paper,TableRow } from "@mui/material"
import { categories } from "../../constants/data";
import { Link,useSearchParams } from "react-router-dom";  
//import { Search } from "@mui/icons-material";
const StyledTable = styled(Table)`
    border: 1px solid rgba(2,7,2, 8);
    width:300px;
    height:400px;
    background-color:'#008000'
`;
const StyledButton = styled(Button)`
    margin:20px;
    width: 85%;
    height:20
    background: #3B6E0F;
    color:#FFFFFF;
    
`;
const StyleLink = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
`
const Stylep = styled(Paper)`
    height:70px;
    text-align:'center;
    color:#90ee90;
`

const Categories = ()=>
{

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    return (
    <>

        
        <Stylep elevation={3} >Category</Stylep>
        {/* <StyleLink to={`/create?category=${category || ''}`} > */}
        {/* <StyledButton  variant="contained">Create Blog</StyledButton> /}
        {/* </StyleLink> */}
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell style={{textAlign:'center', fontSize:20, height:50,backgroundColor:'#008000', color:'FFFFFF'}}>
                        <StyleLink to = '/'>
                        All Categories
                        </StyleLink>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category=>(
                        <TableRow key={category.id}>
                    <TableCell style={{textAlign:'center',fontSize:20, backgroundColor:'#008000',color:'FFFFFF'}}>
                        <StyleLink to={`/?category=${category.type}`}>
                        {category.type}
                        </StyleLink>
                    </TableCell>
                    
                    </TableRow>
                    ))
                
                }
                
            </TableBody>
        </StyledTable>
        {/* <StyledButton  variant="contained">Create Blog</StyledButton> */}
        <StyleLink to={`/create?category=${category || ''}`} >
            <StyledButton  variant="contained">Create Blog</StyledButton>
        </StyleLink>
    </>
    )
}

export default Categories;