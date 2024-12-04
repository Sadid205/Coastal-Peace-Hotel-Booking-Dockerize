# Generated by Django 5.1.3 on 2024-12-02 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0037_alter_review_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.CharField(choices=[('3', '⭐⭐⭐'), ('5', '⭐⭐⭐⭐⭐'), ('4', '⭐⭐⭐⭐'), ('2', '⭐⭐'), ('1', '⭐')], max_length=20),
        ),
    ]