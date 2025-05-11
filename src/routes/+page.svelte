<script>
    let { data } = $props();
  </script>

  <ul>
    {#each data.organizations as organization}
      <li>{organization.name}: {organization.email}</li>
    {/each}
  </ul>