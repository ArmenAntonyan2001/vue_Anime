<template>
  <MDBSideNav v-model="sidenav1" absolute id="sidenav1">
    <MDBSideNavMenu>
      <MDBSideNavItem>
        <MDBSideNavLink>
          <MDBIcon iconStyle="far" icon="smile" class="fa-fw me-3" />
          <span>Link 1</span>
        </MDBSideNavLink>
      </MDBSideNavItem>
      <MDBSideNavItem collapse icon="grin" title="Category 1" show>
        <MDBSideNavItem>
          <MDBSideNavLink>Link 2</MDBSideNavLink>
        </MDBSideNavItem>
        <MDBSideNavItem>
          <MDBSideNavLink>Link 3</MDBSideNavLink>
        </MDBSideNavItem>
      </MDBSideNavItem>
      <MDBSideNavItem collapse icon="grin-wink" title="Category 2">
        <MDBSideNavItem>
          <MDBSideNavLink>Link 4</MDBSideNavLink>
        </MDBSideNavItem>
        <MDBSideNavItem>
          <MDBSideNavLink>Link 5</MDBSideNavLink>
        </MDBSideNavItem>
      </MDBSideNavItem>
    </MDBSideNavMenu>
  </MDBSideNav>

  <div class="text-center">
    <MDBBtn color="primary" aria-controls="#sidenav1" @click="sidenav1 = !sidenav1">
      <MDBIcon icon="bars" />
    </MDBBtn>
  </div>
</template>
<script>
  import {
    MBSideNav,
    MDBSideNavMenu,
    MDBSideNavItem,
    MDBSideNavLink,
    MDBIcon,
    MDBBtn,
    MDBIcon
  } from "mdb-vue-ui-kit";
  import {
    ref
  } from "vue";

  export default {
    components: {
      MBSideNav,
      MDBSideNavMenu,
      MDBSideNavItem,
      MDBSideNavLink,
      MDBIcon,
      MDBBtn,
      MDBIcon
    },
    setup() {
      const sidenav1 = ref(false);

      return {
        sidenav1
      }
    }
  };
</script>