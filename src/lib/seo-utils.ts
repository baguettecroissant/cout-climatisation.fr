import { City } from "@/types";
// We need to import the JSON. Typed imports for JSON require config usually, or just use require/import.
import citiesData from "@/lib/db/cities.json";
import departmentsData from "@/lib/db/departments-infos.json";

const cities = citiesData as City[];

export function getCityFromSlug(slug: string): City | undefined {
    const city = cities.find(c => c.slug === slug);
    if (!city) return undefined;

    const deptInfo = departmentsData.find(d => d.code === city.department_code);
    return {
        ...city,
        department_info: deptInfo
    };
}

export function getAllCitySlugs(): string[] {
    return cities.map(c => c.slug);
}

export function generateCityMetadata(city: City) {
    return {
        title: `Prix Climatisation ${city.name} (${city.zip}) - Devis & Installation PAC`,
        description: `Quel est le prix d'une climatisation à ${city.name} ? Comparez les tarifs des installateurs RGE du département ${city.department_name} et obtenez votre devis gratuit.`,
        alternates: {
            canonical: `https://www.cout-climatisation.fr/prix-climatisation/${city.slug}`,
        },
    };
}

export function getAllDepartmentCodes(): string[] {
    return departmentsData.map(d => d.code);
}

export function getCitiesByDepartment(departmentCode: string): City[] {
    return cities.filter(c => c.department_code === departmentCode);
}
