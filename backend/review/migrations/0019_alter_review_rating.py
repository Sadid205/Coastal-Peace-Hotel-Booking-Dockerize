# Generated by Django 5.1.1 on 2024-10-23 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0018_alter_review_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.CharField(choices=[('3', '⭐⭐⭐'), ('1', '⭐'), ('2', '⭐⭐'), ('5', '⭐⭐⭐⭐⭐'), ('4', '⭐⭐⭐⭐')], max_length=20),
        ),
    ]