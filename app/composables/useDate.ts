type DateFormat = 'numeric' | 'long' | 'short';

function formatDate(dateString: string, format: DateFormat = 'numeric'): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();

  if (format === 'numeric') {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  if (format === 'long') {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[date.getMonth()];
    return `${day} ${month} ${year}`;
  }

  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function useDateFeed() {
  return (dateString: string) => formatDate(dateString, 'numeric');
}

export function useDateDemo() {
  return (dateString: string) => formatDate(dateString, 'long');
}

export function useDateSecreto() {
  const formatDateSecreto = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60)
      return 'Only just';
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;

    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return formatDateSecreto;
}
