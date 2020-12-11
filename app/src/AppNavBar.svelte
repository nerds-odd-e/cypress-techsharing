<script>
    import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "sveltestrap";
</script>

<Navbar color="info" light expand="md">
    <NavbarBrand href=".">Home</NavbarBrand>
    <Nav class="ml-auto" navbar>
        <NavItem>
            <NavLink href="https://cypress.io">@cypress.io</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://www.odd-e.com">@odd-e.com</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://github.com/nerds-odd-e/cypress-techsharing">
                @github
            </NavLink>
        </NavItem>
    </Nav>
</Navbar>
