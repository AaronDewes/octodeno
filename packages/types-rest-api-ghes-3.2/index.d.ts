// DO NOT EDIT THIS FILE
import { Octokit } from "@octokit-next/types";
import { Operation, WithNewHeaders } from "@octokit-next/types-rest-api";
import { paths } from "@octokit-next/types-openapi-ghes-3.2-diff-to-api.github.com";
import { Simplify } from "type-fest";

import "@octokit-next/types-rest-api";

export type ResponseHeadersDiff = {
  "x-github-enterprise-version": string;
};

export type ResponseHeaders = Simplify<
  Octokit.ApiVersions["github.com"]["ResponseHeaders"] & ResponseHeadersDiff
>;

export type AddedEndpoints = {
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#delete-a-global-webhook
   */
  "DELETE /admin/hooks/{hook_id}": Operation<
    paths,
    "delete",
    "/admin/hooks/{hook_id}",
    "superpro"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#delete-a-public-key
   */
  "DELETE /admin/keys/{key_ids}": Operation<
    paths,
    "delete",
    "/admin/keys/{key_ids}"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#delete-a-pre-receive-environment
   */
  "DELETE /admin/pre-receive-environments/{pre_receive_environment_id}": Operation<
    paths,
    "delete",
    "/admin/pre-receive-environments/{pre_receive_environment_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#delete-a-pre-receive-hook
   */
  "DELETE /admin/pre-receive-hooks/{pre_receive_hook_id}": Operation<
    paths,
    "delete",
    "/admin/pre-receive-hooks/{pre_receive_hook_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#delete-a-personal-access-token
   */
  "DELETE /admin/tokens/{token_id}": Operation<
    paths,
    "delete",
    "/admin/tokens/{token_id}"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#delete-a-user
   */
  "DELETE /admin/users/{username}": Operation<
    paths,
    "delete",
    "/admin/users/{username}"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token
   */
  "DELETE /admin/users/{username}/authorizations": Operation<
    paths,
    "delete",
    "/admin/users/{username}/authorizations"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/apps#revoke-a-grant-for-an-application
   */
  "DELETE /applications/{client_id}/grants/{access_token}": Operation<
    paths,
    "delete",
    "/applications/{client_id}/grants/{access_token}"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/apps#revoke-an-authorization-for-an-application
   */
  "DELETE /applications/{client_id}/tokens/{access_token}": Operation<
    paths,
    "delete",
    "/applications/{client_id}/tokens/{access_token}"
  >;
  /**
   * @see
   */
  "DELETE /enterprise/announcement": Operation<
    paths,
    "delete",
    "/enterprise/announcement"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization
   */
  "DELETE /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}": Operation<
    paths,
    "delete",
    "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository
   */
  "DELETE /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}": Operation<
    paths,
    "delete",
    "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#remove-an-authorized-ssh-key
   */
  "DELETE /setup/api/settings/authorized-keys": Operation<
    paths,
    "delete",
    "/setup/api/settings/authorized-keys"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#demote-a-site-administrator
   */
  "DELETE /users/{username}/site_admin": Operation<
    paths,
    "delete",
    "/users/{username}/site_admin"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#unsuspend-a-user
   */
  "DELETE /users/{username}/suspended": Operation<
    paths,
    "delete",
    "/users/{username}/suspended"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#list-global-webhooks
   */
  "GET /admin/hooks": Operation<paths, "get", "/admin/hooks", "superpro">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-a-global-webhook
   */
  "GET /admin/hooks/{hook_id}": Operation<
    paths,
    "get",
    "/admin/hooks/{hook_id}",
    "superpro"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#list-public-keys
   */
  "GET /admin/keys": Operation<paths, "get", "/admin/keys">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#list-pre-receive-environments
   */
  "GET /admin/pre-receive-environments": Operation<
    paths,
    "get",
    "/admin/pre-receive-environments",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-a-pre-receive-environment
   */
  "GET /admin/pre-receive-environments/{pre_receive_environment_id}": Operation<
    paths,
    "get",
    "/admin/pre-receive-environments/{pre_receive_environment_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment
   */
  "GET /admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest": Operation<
    paths,
    "get",
    "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#list-pre-receive-hooks
   */
  "GET /admin/pre-receive-hooks": Operation<
    paths,
    "get",
    "/admin/pre-receive-hooks",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-a-pre-receive-hook
   */
  "GET /admin/pre-receive-hooks/{pre_receive_hook_id}": Operation<
    paths,
    "get",
    "/admin/pre-receive-hooks/{pre_receive_hook_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#list-personal-access-tokens
   */
  "GET /admin/tokens": Operation<paths, "get", "/admin/tokens">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/apps#check-an-authorization
   */
  "GET /applications/{client_id}/tokens/{access_token}": Operation<
    paths,
    "get",
    "/applications/{client_id}/tokens/{access_token}"
  >;
  /**
   * @see
   */
  "GET /enterprise/announcement": Operation<
    paths,
    "get",
    "/enterprise/announcement"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-license-information
   */
  "GET /enterprise/settings/license": Operation<
    paths,
    "get",
    "/enterprise/settings/license"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-statistics
   */
  "GET /enterprise/stats/all": Operation<paths, "get", "/enterprise/stats/all">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-comment-statistics
   */
  "GET /enterprise/stats/comments": Operation<
    paths,
    "get",
    "/enterprise/stats/comments"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-gist-statistics
   */
  "GET /enterprise/stats/gists": Operation<
    paths,
    "get",
    "/enterprise/stats/gists"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-hooks-statistics
   */
  "GET /enterprise/stats/hooks": Operation<
    paths,
    "get",
    "/enterprise/stats/hooks"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-issues-statistics
   */
  "GET /enterprise/stats/issues": Operation<
    paths,
    "get",
    "/enterprise/stats/issues"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-milestone-statistics
   */
  "GET /enterprise/stats/milestones": Operation<
    paths,
    "get",
    "/enterprise/stats/milestones"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-organization-statistics
   */
  "GET /enterprise/stats/orgs": Operation<
    paths,
    "get",
    "/enterprise/stats/orgs"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-pages-statistics
   */
  "GET /enterprise/stats/pages": Operation<
    paths,
    "get",
    "/enterprise/stats/pages"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-pull-requests-statistics
   */
  "GET /enterprise/stats/pulls": Operation<
    paths,
    "get",
    "/enterprise/stats/pulls"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-repository-statistics
   */
  "GET /enterprise/stats/repos": Operation<
    paths,
    "get",
    "/enterprise/stats/repos"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-users-statistics
   */
  "GET /enterprise/stats/users": Operation<
    paths,
    "get",
    "/enterprise/stats/users"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization
   */
  "GET /orgs/{org}/pre-receive-hooks": Operation<
    paths,
    "get",
    "/orgs/{org}/pre-receive-hooks",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization
   */
  "GET /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}": Operation<
    paths,
    "get",
    "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository
   */
  "GET /repos/{owner}/{repo}/pre-receive-hooks": Operation<
    paths,
    "get",
    "/repos/{owner}/{repo}/pre-receive-hooks",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository
   */
  "GET /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}": Operation<
    paths,
    "get",
    "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-the-configuration-status
   */
  "GET /setup/api/configcheck": Operation<
    paths,
    "get",
    "/setup/api/configcheck"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-the-maintenance-status
   */
  "GET /setup/api/maintenance": Operation<
    paths,
    "get",
    "/setup/api/maintenance"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-settings
   */
  "GET /setup/api/settings": Operation<paths, "get", "/setup/api/settings">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-all-authorized-ssh-keys
   */
  "GET /setup/api/settings/authorized-keys": Operation<
    paths,
    "get",
    "/setup/api/settings/authorized-keys"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#update-a-global-webhook
   */
  "PATCH /admin/hooks/{hook_id}": Operation<
    paths,
    "patch",
    "/admin/hooks/{hook_id}",
    "superpro"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team
   */
  "PATCH /admin/ldap/teams/{team_id}/mapping": Operation<
    paths,
    "patch",
    "/admin/ldap/teams/{team_id}/mapping"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user
   */
  "PATCH /admin/ldap/users/{username}/mapping": Operation<
    paths,
    "patch",
    "/admin/ldap/users/{username}/mapping"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#update-an-organization-name
   */
  "PATCH /admin/organizations/{org}": Operation<
    paths,
    "patch",
    "/admin/organizations/{org}"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#update-a-pre-receive-environment
   */
  "PATCH /admin/pre-receive-environments/{pre_receive_environment_id}": Operation<
    paths,
    "patch",
    "/admin/pre-receive-environments/{pre_receive_environment_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#update-a-pre-receive-hook
   */
  "PATCH /admin/pre-receive-hooks/{pre_receive_hook_id}": Operation<
    paths,
    "patch",
    "/admin/pre-receive-hooks/{pre_receive_hook_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#update-the-username-for-a-user
   */
  "PATCH /admin/users/{username}": Operation<
    paths,
    "patch",
    "/admin/users/{username}"
  >;
  /**
   * @see
   */
  "PATCH /enterprise/announcement": Operation<
    paths,
    "patch",
    "/enterprise/announcement"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization
   */
  "PATCH /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}": Operation<
    paths,
    "patch",
    "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository
   */
  "PATCH /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}": Operation<
    paths,
    "patch",
    "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#create-a-global-webhook
   */
  "POST /admin/hooks": Operation<paths, "post", "/admin/hooks", "superpro">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#ping-a-global-webhook
   */
  "POST /admin/hooks/{hook_id}/pings": Operation<
    paths,
    "post",
    "/admin/hooks/{hook_id}/pings",
    "superpro"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team
   */
  "POST /admin/ldap/teams/{team_id}/sync": Operation<
    paths,
    "post",
    "/admin/ldap/teams/{team_id}/sync"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user
   */
  "POST /admin/ldap/users/{username}/sync": Operation<
    paths,
    "post",
    "/admin/ldap/users/{username}/sync"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#create-an-organization
   */
  "POST /admin/organizations": Operation<paths, "post", "/admin/organizations">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#create-a-pre-receive-environment
   */
  "POST /admin/pre-receive-environments": Operation<
    paths,
    "post",
    "/admin/pre-receive-environments",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#start-a-pre-receive-environment-download
   */
  "POST /admin/pre-receive-environments/{pre_receive_environment_id}/downloads": Operation<
    paths,
    "post",
    "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#create-a-pre-receive-hook
   */
  "POST /admin/pre-receive-hooks": Operation<
    paths,
    "post",
    "/admin/pre-receive-hooks",
    "eye-scream"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#create-a-user
   */
  "POST /admin/users": Operation<paths, "post", "/admin/users">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#create-an-impersonation-oauth-token
   */
  "POST /admin/users/{username}/authorizations": Operation<
    paths,
    "post",
    "/admin/users/{username}/authorizations"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/apps#reset-an-authorization
   */
  "POST /applications/{client_id}/tokens/{access_token}": Operation<
    paths,
    "post",
    "/applications/{client_id}/tokens/{access_token}"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#start-a-configuration-process
   */
  "POST /setup/api/configure": Operation<paths, "post", "/setup/api/configure">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode
   */
  "POST /setup/api/maintenance": Operation<
    paths,
    "post",
    "/setup/api/maintenance"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#add-an-authorized-ssh-key
   */
  "POST /setup/api/settings/authorized-keys": Operation<
    paths,
    "post",
    "/setup/api/settings/authorized-keys"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#create-a-github-enterprise-server-license
   */
  "POST /setup/api/start": Operation<paths, "post", "/setup/api/start">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#upgrade-a-license
   */
  "POST /setup/api/upgrade": Operation<paths, "post", "/setup/api/upgrade">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#set-settings
   */
  "PUT /setup/api/settings": Operation<paths, "put", "/setup/api/settings">;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator
   */
  "PUT /users/{username}/site_admin": Operation<
    paths,
    "put",
    "/users/{username}/site_admin"
  >;
  /**
   * @see https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#suspend-a-user
   */
  "PUT /users/{username}/suspended": Operation<
    paths,
    "put",
    "/users/{username}/suspended"
  >;
};

export type RemovedRoutes =
  | "DELETE /orgs/{org}/blocks/{username}"
  | "DELETE /orgs/{org}/credential-authorizations/{credential_id}"
  | "DELETE /orgs/{org}/interaction-limits"
  | "DELETE /orgs/{org}/invitations/{invitation_id}"
  | "DELETE /orgs/{org}/migrations/{migration_id}/archive"
  | "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"
  | "DELETE /orgs/{org}/packages/{package_type}/{package_name}"
  | "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
  | "DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"
  | "DELETE /repos/{owner}/{repo}/automated-security-fixes"
  | "DELETE /repos/{owner}/{repo}/import"
  | "DELETE /repos/{owner}/{repo}/interaction-limits"
  | "DELETE /repos/{owner}/{repo}/vulnerability-alerts"
  | "DELETE /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}"
  | "DELETE /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}"
  | "DELETE /scim/v2/organizations/{org}/Users/{scim_user_id}"
  | "DELETE /user/blocks/{username}"
  | "DELETE /user/interaction-limits"
  | "DELETE /user/migrations/{migration_id}/archive"
  | "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"
  | "DELETE /user/packages/{package_type}/{package_name}"
  | "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
  | "DELETE /users/{username}/packages/{package_type}/{package_name}"
  | "DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
  | "GET /enterprises/{enterprise}/audit-log"
  | "GET /enterprises/{enterprise}/settings/billing/actions"
  | "GET /enterprises/{enterprise}/settings/billing/packages"
  | "GET /enterprises/{enterprise}/settings/billing/shared-storage"
  | "GET /marketplace_listing/accounts/{account_id}"
  | "GET /marketplace_listing/plans"
  | "GET /marketplace_listing/plans/{plan_id}/accounts"
  | "GET /marketplace_listing/stubbed/accounts/{account_id}"
  | "GET /marketplace_listing/stubbed/plans"
  | "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"
  | "GET /orgs/{org}/blocks"
  | "GET /orgs/{org}/blocks/{username}"
  | "GET /orgs/{org}/credential-authorizations"
  | "GET /orgs/{org}/failed_invitations"
  | "GET /orgs/{org}/interaction-limits"
  | "GET /orgs/{org}/invitations"
  | "GET /orgs/{org}/invitations/{invitation_id}/teams"
  | "GET /orgs/{org}/migrations"
  | "GET /orgs/{org}/migrations/{migration_id}"
  | "GET /orgs/{org}/migrations/{migration_id}/archive"
  | "GET /orgs/{org}/migrations/{migration_id}/repositories"
  | "GET /orgs/{org}/packages"
  | "GET /orgs/{org}/packages/{package_type}/{package_name}"
  | "GET /orgs/{org}/packages/{package_type}/{package_name}/versions"
  | "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
  | "GET /orgs/{org}/secret-scanning/alerts"
  | "GET /orgs/{org}/settings/billing/actions"
  | "GET /orgs/{org}/settings/billing/packages"
  | "GET /orgs/{org}/settings/billing/shared-storage"
  | "GET /orgs/{org}/team-sync/groups"
  | "GET /orgs/{org}/teams/{team_slug}/invitations"
  | "GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings"
  | "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"
  | "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"
  | "GET /repos/{owner}/{repo}/autolinks"
  | "GET /repos/{owner}/{repo}/autolinks/{autolink_id}"
  | "GET /repos/{owner}/{repo}/community/code_of_conduct"
  | "GET /repos/{owner}/{repo}/community/profile"
  | "GET /repos/{owner}/{repo}/import"
  | "GET /repos/{owner}/{repo}/import/authors"
  | "GET /repos/{owner}/{repo}/import/large_files"
  | "GET /repos/{owner}/{repo}/interaction-limits"
  | "GET /repos/{owner}/{repo}/pages/health"
  | "GET /repos/{owner}/{repo}/traffic/clones"
  | "GET /repos/{owner}/{repo}/traffic/popular/paths"
  | "GET /repos/{owner}/{repo}/traffic/popular/referrers"
  | "GET /repos/{owner}/{repo}/traffic/views"
  | "GET /repos/{owner}/{repo}/vulnerability-alerts"
  | "GET /scim/v2/enterprises/{enterprise}/Groups"
  | "GET /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}"
  | "GET /scim/v2/enterprises/{enterprise}/Users"
  | "GET /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}"
  | "GET /scim/v2/organizations/{org}/Users"
  | "GET /scim/v2/organizations/{org}/Users/{scim_user_id}"
  | "GET /teams/{team_id}/invitations"
  | "GET /teams/{team_id}/team-sync/group-mappings"
  | "GET /user/blocks"
  | "GET /user/blocks/{username}"
  | "GET /user/interaction-limits"
  | "GET /user/marketplace_purchases"
  | "GET /user/marketplace_purchases/stubbed"
  | "GET /user/migrations"
  | "GET /user/migrations/{migration_id}"
  | "GET /user/migrations/{migration_id}/archive"
  | "GET /user/migrations/{migration_id}/repositories"
  | "GET /user/packages"
  | "GET /user/packages/{package_type}/{package_name}"
  | "GET /user/packages/{package_type}/{package_name}/versions"
  | "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
  | "GET /user/{username}/packages"
  | "GET /users/{username}/packages/{package_type}/{package_name}"
  | "GET /users/{username}/packages/{package_type}/{package_name}/versions"
  | "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
  | "GET /users/{username}/settings/billing/actions"
  | "GET /users/{username}/settings/billing/packages"
  | "GET /users/{username}/settings/billing/shared-storage"
  | "PATCH /orgs/{org}/teams/{team_slug}/team-sync/group-mappings"
  | "PATCH /repos/{owner}/{repo}/import"
  | "PATCH /repos/{owner}/{repo}/import/authors/{author_id}"
  | "PATCH /repos/{owner}/{repo}/import/lfs"
  | "PATCH /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}"
  | "PATCH /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}"
  | "PATCH /scim/v2/organizations/{org}/Users/{scim_user_id}"
  | "PATCH /teams/{team_id}/team-sync/group-mappings"
  | "PATCH /user/email/visibility"
  | "POST /orgs/{org}/invitations"
  | "POST /orgs/{org}/migrations"
  | "POST /orgs/{org}/packages/{package_type}/{package_name}/restore"
  | "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
  | "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"
  | "POST /repos/{owner}/{repo}/autolinks"
  | "POST /repos/{owner}/{repo}/merge-upstream"
  | "POST /scim/v2/enterprises/{enterprise}/Groups"
  | "POST /scim/v2/enterprises/{enterprise}/Users"
  | "POST /scim/v2/organizations/{org}/Users"
  | "POST /user/migrations"
  | "POST /user/packages/{package_type}/{package_name}/restore"
  | "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
  | "POST /users/{username}/packages/{package_type}/{package_name}/restore"
  | "POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
  | "PUT /orgs/{org}/blocks/{username}"
  | "PUT /orgs/{org}/interaction-limits"
  | "PUT /repos/{owner}/{repo}/automated-security-fixes"
  | "PUT /repos/{owner}/{repo}/import"
  | "PUT /repos/{owner}/{repo}/interaction-limits"
  | "PUT /repos/{owner}/{repo}/vulnerability-alerts"
  | "PUT /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}"
  | "PUT /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}"
  | "PUT /scim/v2/organizations/{org}/Users/{scim_user_id}"
  | "PUT /user/blocks/{username}"
  | "PUT /user/interaction-limits";

declare module "@octokit-next/types" {
  namespace Octokit {
    interface ApiVersions {
      "ghes-3.2": {
        RequestHeaders: Octokit.ApiVersions["github.com"]["RequestHeaders"];

        ResponseHeaders: Simplify<
          Octokit.ApiVersions["github.com"]["ResponseHeaders"] &
            ResponseHeadersDiff
        >;

        Endpoints: Simplify<
          WithNewHeaders<
            Omit<
              Octokit.ApiVersions["github.com"]["Endpoints"],
              keyof AddedEndpoints | RemovedRoutes
            > &
              AddedEndpoints,
            Octokit.ApiVersions["ghes-3.2"]["ResponseHeaders"]
          >
        >;
      };
    }
  }
}
