export default function getRepoUrl(url) {
  return process.env.NODE_ENV !== 'production' ? `/${url}` : `/evolucion-informatica/${url}`;
}
