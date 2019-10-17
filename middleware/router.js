export default function ({ route, redirect }) {
  if (route.fullPath === "/user/settings") {
    return redirect('/user/settings/general')
  }
  if (route.fullPath === "/user/blog") {
    return redirect('/user/blog/list')
  }
}
