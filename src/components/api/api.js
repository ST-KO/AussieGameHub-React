export async function getGames() {

    const url = 'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs';

    try {
        const response = await fetch(url);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}