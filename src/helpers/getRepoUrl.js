export default function getRepoUrl(url) {
  return process.env.NODE_ENV ? `/${url}` : `/evolucion-informatica/${url}`;
}
