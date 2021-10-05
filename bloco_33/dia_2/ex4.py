# Exercício 4: Dado o seguinte arquivo no formato JSON , leia seu conteúdo e calcule a porcentagem de livros em cada categoria, em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.
#     categoria,porcentagem
#     Python,0.23201856148491878
#     Java,0.23201856148491878
#     PHP,0.23201856148491878

import json
from csv import writer


def count_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentages(count_by_category, total_books):
    return [
        [cat, count_by_category[cat]/total_books] for cat in count_by_category
    ]


def write_csv_file(file, headers, rows):
    file_writer = writer(file)
    file_writer.writerow(headers)
    file_writer.writerows(rows)


if __name__ == '__main__':
    with open("books-61ea59b31a424b2f6e51dbe47fb24511.json") as file:
        books = [
            json.loads(line) for line in file
        ]

    categories = count_by_categories(books)

    percentages = calculate_percentages(categories, len(books))

    headers = ['catgoria', 'porcentagem']

    with open("report.csv", 'w') as file:
        write_csv_file(file, headers, percentages)
