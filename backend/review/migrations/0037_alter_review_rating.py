# Generated by Django 5.1.3 on 2024-12-02 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0036_alter_review_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.CharField(choices=[('5', '⭐⭐⭐⭐⭐'), ('2', '⭐⭐'), ('1', '⭐'), ('4', '⭐⭐⭐⭐'), ('3', '⭐⭐⭐')], max_length=20),
        ),
    ]
